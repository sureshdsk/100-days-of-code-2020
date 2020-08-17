from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ValidationError


class User(BaseModel):
    id: int
    name = str
    skills: List[str] = []
    dob: datetime
    company: Optional[str]


user1_data = {
    'id': 1,
    'name': 'suresh',
    'skills': ['Python', 'Docker', 'Kubernetes'],
    'dob': '1991-05-16 00:00:00'
}
user1 = User(**user1_data)

print(user1.id)
print(user1.skills)
print(user1.dob, type(user1.dob))
print(user1.dict())
print(user1.json())

user2_data = {
    'id': 'abcd',
    'name': 'suresh',
    'skills': ['Python', 'Docker', 'Kubernetes']
}
try:
    user2 = User(**user2_data)
except ValidationError as e:
    # id - not a valid integer error
    # dob - field required error
    print(e.json())
