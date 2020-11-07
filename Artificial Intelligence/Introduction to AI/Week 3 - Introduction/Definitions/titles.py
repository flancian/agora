#!/usr/bin/env/python3

import os

directory = "/home/websinthe/Documents/KGB_Vault/__Education/Artificial Intelligence/Introduction to AI/Week 3 - Introduction/Definitions"
for entry in os.scandir(directory):
	if entry.path.endswith(".md"):
		with open("ai_terms.txt", "a") as output:
			term = str(entry.name.replace("_", " "))
			term = term.replace(".md", "")
			output.write(term)
			output.write("\r\n")
