use borsh::{BorshDeserialize, BorshSerialize};
use near_bindgen::collections::Map;
use near_bindgen::{env, near_bindgen};

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

type AccountPairHash = Vec<u8>;
type AccountHash = Vec<u8>;
type Key = String;
type AccountId = String;
type Request = String;
type Response = String;

#[derive(BorshDeserialize, BorshSerialize)]
pub struct AccountPair {
    from_account_id: AccountId,
    to_account_id: AccountId,
}

impl AccountPair {
    pub fn reverse(&self) -> Self {
        Self {
            from_account_id: self.to_account_id.clone(),
            to_account_id: self.from_account_id.clone(),
        }
    }

    pub fn hash(&self) -> AccountPairHash {
        env::sha256(&self.try_to_vec().unwrap())
    }
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct WebRTCHub {
    requests: Map<AccountPairHash, Request>,
    responses: Map<AccountPairHash, Response>,
    encryption_public_keys: Map<AccountHash, Key>
}

impl Default for WebRTCHub {
    fn default() -> Self {
        env::panic(b"Not initialized yet.");
    }
}

fn hash_account_id(account_id: &AccountId) -> AccountHash {
    env::sha256(account_id.as_bytes())
}

#[near_bindgen]
impl WebRTCHub {
    #[init]
    pub fn new() -> Self {
        assert!(env::state_read::<WebRTCHub>().is_none(), "The contract is already initialized");
        Self {
            requests: Map::new(b"r".to_vec()),
            responses: Map::new(b"a".to_vec()),
            encryption_public_keys: Map::new(b"k".to_vec()),
        }
    }

    pub fn set_key(&mut self, key: Key) {
        self.encryption_public_keys.insert(&hash_account_id(&env::predecessor_account_id()), &key);
    }

    pub fn get_key(&self, account_id: AccountId) -> Option<Key> {
        self.encryption_public_keys.get(&hash_account_id(&account_id))
    }

    pub fn make_request(&mut self, to_account_id: AccountId, request: Request) {
        let pair = AccountPair {
            from_account_id: env::predecessor_account_id(),
            to_account_id,
        };
        self.requests.insert(&pair.hash(), &request);
        self.responses.remove(&pair.hash());
    }

    pub fn get_request(&self, from_account_id: AccountId, to_account_id: AccountId) -> Option<Request> {
        let pair = AccountPair {
            from_account_id,
            to_account_id,
        };
        self.requests.get(&pair.hash())
    }

    pub fn respond(&mut self, from_account_id: AccountId, response: Request) {
        let pair = AccountPair {
            from_account_id,
            to_account_id: env::predecessor_account_id(),
        };
        self.responses.insert(&pair.hash(), &response);
    }

    pub fn get_response(&self, from_account_id: AccountId, to_account_id: AccountId) -> Option<Response> {
        let pair = AccountPair {
            from_account_id,
            to_account_id,
        };
        self.responses.get(&pair.hash())
    }
}
