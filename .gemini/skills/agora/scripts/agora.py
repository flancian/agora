import sys
import os
import urllib.request
import urllib.parse
import json

# Default to the public Agora, but allow override for local dev
AGORA_URL = os.environ.get("AGORA_URL", "https://anagora.org")

def resolve(node):
    """
    Resolves a wikilink or node name to an Agora URL and attempts to fetch content.
    """
    # Strip brackets if present
    clean_node = node.replace("[[", "").replace("]]", "")
    # Canonicalize (simple version match Agora slugify)
    # Ideally we'd match the server's slugify logic exactly.
    uri = urllib.parse.quote_plus(clean_node)
    
    url = f"{AGORA_URL}/{uri}"
    
    print(f"Node: [[{clean_node}]]")
    print(f"URL: {url}")
    
    # Try to fetch raw content (text/markdown)
    # The Agora serves raw content at /raw/<uri> or via content negotiation?
    # Actually /raw/ takes a *subnode* path usually.
    # But /<node>.json or /<node>.md (if supported) might be better.
    # Currently anagora.org/<node> returns HTML.
    
    # Let's try the new /api/synthesize endpoint if enabled?
    # Or fallback to text extraction if possible.
    # For now, let's just point the agent to the URL.
    pass

def search(query):
    """
    Searches the Agora for a query string.
    """
    print(f"Searching Agora for: {query}")
    url = f"{AGORA_URL}/search?q={urllib.parse.quote_plus(query)}"
    print(f"Search URL: {url}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: agora.py <command> <arg>")
        print("Commands: resolve, search")
        sys.exit(1)
        
    cmd = sys.argv[1]
    arg = " ".join(sys.argv[2:]) # Handle multi-word args
    
    if cmd == "resolve":
        resolve(arg)
    elif cmd == "search":
        search(arg)
    else:
        print(f"Unknown command: {cmd}")
