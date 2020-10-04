
class Foo:
    def bar(self):
        pass

    @classmethod
    def foo(cls):
        pass

print(Foo.bar, id(Foo.bar))
print(Foo.bar is Foo.bar)
print(Foo.foo, id(Foo.foo))
print(Foo.foo is Foo.foo)
