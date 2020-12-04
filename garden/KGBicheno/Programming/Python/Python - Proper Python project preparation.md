# How to create a Python package

## Step 1: Create a virtual environment

### Linux (Debian/Apt)

1. Make sure everything is up-to-date. `sudo apt-get update` followed by `sudo apt-get upgrade -y`
2. Check you have Python installed. `python --version` (3.7 or 3.8) or fuck up, type `-v` instead of `--version` and blast your command line
3. Create the folder structure for your project. Folder structure should have the venv adjacent to the project folder. Make sure the folder where the code will live has an `__init__.py` file. This will make it a [[Python - Making an importable Python module|Python package]].

```
Project
	|---project
	|	|---src
	|	|	|---__init__.py
	|	|	|---main.py
	|	|---whatevs
	|	|---README.md
	|	|---LICENCE.md
	|	|---.env
	|	|---whatevs
	|---venv
		|---bin
			|---activate
	 	
```

4. Create the virtual environment so that the folder structure appears as above in step 3 using `python3 -m venv venv` although the second venv can just be whatever path to the virtual environment you wish
5. Activate the virtual environment with `. venv\bin\activate`
6. Upgrade Pip with `pip install --upgrade pip`
7. Install/upgrade setuptools and wheel with `pip install --upgrade setuptools wheel`
8. Begin coding and don't forget to [[Python - How to write test units|write test units!]].

### Windows

1. Create a file system as above
2. 




### Logging
- docs.python.org: python 3 logging 


