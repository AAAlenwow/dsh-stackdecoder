# src/auth.py — fixture for dsh-stackdecoder (Python trace)

def validate_token(token):
    if not token:
        raise ValueError("token is empty")
    return token

def login(username, password):
    validate_token(None)  # triggers the throw
    return None
