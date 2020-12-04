#!/home/websinthe/anaconda3/bin/python.
"""
Economic Glossary MD file cutter.

This script cuts the single MD file of my Obsidian Glossary into
one MD file for each entry, while attempting to cross-link them
as it goes.
"""


def send_line(content: str, destination: str):
    """send_line function takes two strings.

    send_line
    - takes a line of an md file,
    - checks if it's a title
    - if it is, creates a new file and sets it for feeding
    - if it isn't, continues feeding the previous file
    """
    content_line = str(line)
    print(content_line[:1])
    if content_line[:1] == "#":
        destination = content_line[1:].strip() + ".md"
        destination = destination.title()
        if "/" in destination:
            destination = destination.replace("/", "-")
        with open(destination, "x") as newentry:
            newentry.write(line)
            newentry.write("\r\n")
            newentry.write("Go back to the [[Economic_Glossary]]\r\n")
            newentry.write("\r\n")
            print(destination, " created.")
    else:
        with open(destination, "a") as oldentry:
            oldentry.write(line)
    return destination


with open("Economic_Glossary.md", "r") as source:
    title = "Economic Glossary"
    for line in source:
        title = send_line(line, title)
