# Dictionaries

Go to the[[Python Week 2 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

For code examples see the [[Week2 Dictionaries Lab]]

Dictionaries are another collection variable but whose index is a set of keys, and are unordered. The keys also need not be integers but are usually characters. Dictionaries store "key-value" pairs, with values being accessed by their associated key.

![An illustration of the structure of a dictionary versus a list](https://i.imgur.com/84Pm85r.png)

Keys are the first elements. They must be 
- immutable
- unique.

Each key is followed by a value separated by a colon. The values can be: 
- immutable
- mutable
- duplicates.

Each key and value pair is separated by a comma. 

```python
char_dict = { "Name" : "Emily", "Species" : "Essai", "Designation": "Eclipse"}
```

Alternatively, this structure is also valid.

```python
char_dict = { 
	"Name" : "Emily", 
	"Species" : "Essai", 
	"Designation": "Eclipse"
	}
```

## Obtaining values from dictionaries

We use the keys to obtain the values from a dictionary. 

E.g.

```python
print(char_dict["Name"])
>>> Emily
print(char_dict["Designation"])
>>> Eclipse
```

## Manipulating dictionaries

#### Add a key-value pair

We can add a key-value pair to an existing dictionary by using the assignment operator `=` when we call a key from the dictionary.

E.g.

`char_dict["Father"] = "Morgan Medici"`

```python
char_dict = { 
	"Name" : "Emily", 
	"Species" : "Essai", 
	"Designation": "Eclipse",
	"Father" : "Morgan Medici"
}
```

#### Delete a key-value pair

We can delete a key-value pair from a dictionary by passing the dictionary while calling a specific key into the `del()` function.

E.g.

`del(char_dict["Father"]) #oops, black hole got him`

```python
char_dict = { 
	"Name" : "Emily", 
	"Species" : "Essai", 
	"Designation": "Eclipse"
}
```

#### Checking if a key is in a dictionary

We can verify if a key is in a dictionary using the `in` command.

E.g.

```python
sc_dict = dict( 
			Leviathan : "Claire McKinley",
			Behemoth: "Jon Smyth",
			Monarch : "Morgan Medici",
			Eclipse : "Emily Medici",
			Golem : "The Mother of the Essai"
			)
if "Monarch" in sc_dict:
	print("Monarch is active.")
```

## Obtaining a list of keys and values

#### Keys

You can obtain a list of all keys in a dictionary using the `keys()` method.

E.g.

```python
print(sc_dict.keys())
>>> ["Leviathan", "Behemoth", "Monarch", "Eclipse", "Golem"]
```

#### Values

Likewise, values can be obtained using the `values()` method.

```python
print(sc_dict.values())
>>> ["Claire McKinley", "Jon Smyth", "Morgan Medici". "Emily Medici", "The Mother of the Essai"]
```

