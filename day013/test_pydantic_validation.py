from pydantic import BaseModel, ValidationError, validator


class SignupUserModel(BaseModel):
    name: str
    username: str
    password1: str
    password2: str

    @validator('name')
    def name_must_contain_space(cls, val):
        if ' ' not in val:
            raise ValueError('name must contain a space')
        return val.title()

    @validator('password2')
    def passwords_match(cls, val, values, **kwargs):
        if 'password1' in val and val != values['password1']:
            raise ValueError('passwords do not match')
        return val

    @validator('username')
    def username_alphanumeric(cls, val):
        assert val.isalnum(), 'must be alphanumeric'
        return val


user = SignupUserModel(
    name='Suresh Kumar',
    username='sureshdsk',
    password1='secretpwd',
    password2='secretpwd',
)
print(user.dict())

try:
    SignupUserModel(
        name='Suresh',
        username='sureshdsk',
        password1='secretpwd',
        password2='secret',
    )
except ValidationError as e:
    print(e.json())
