# Fail Fast
When you aren't sure what's going to happen or there's some ambiguity about whether something will work, raise an exception and fail right there and then with an explanation of what went wrong so you can avoid having to dig through fucking tracebacks for 2 hours.

```
class TestMaintMode:                             			


	@pytest.mark.asyncio									
	
	async def test_maint_mode(self, bot, aresponses):		
	
		# given/prep/arrange								
		
															
		# when/act/do
		

		# then/assert/check
		
```

1. Establish test class  
2. Decorator marks test as async 
3. Define sync function 
4. These three are the basic structure of how all tests work

---

## Using Pytest

1. Create a python file whose name starts with "test_"
2. Either import or begin the file with the function or functions you'd like to test
3. Define a number of test functions that take the same arguments as the function/s being tested
4. `assert` a call to the function `==` a certain value that you know should be true
5. Try cover all possible cases for the function in your tests
6. Go to the working directory for that file
7. run the command `pytest`
8. Pytest will run and tell you how many tests succeeded and how many failed. 