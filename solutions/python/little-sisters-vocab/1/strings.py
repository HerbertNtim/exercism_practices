"""Functions for creating, transforming, and adding prefixes to strings."""


def add_prefix_un(word):
    return "un" + word


def make_word_groups(vocab_words: list[str]) -> str:
    if not vocab_words:
        return ""  # or raise ValueError if you prefer

    prefix, *words = vocab_words
    # use map to avoid an explicit for/while loop
    prefixed = list(map(lambda w: prefix + w, words))
    return " :: ".join([prefix] + prefixed)


def remove_suffix_ness(word: str) -> str:
    # Step 1: Remove the suffix "ness"
    if not word.endswith("ness"):
        return word  # just a safeguard
    
    root = word[:-4]  # remove 'ness'
    
    # Step 2: Check for consonant + i ending
    if len(root) > 1 and root[-1] == "i" and root[-2] not in "aeiou":
        root = root[:-1] + "y"
    
    return root


def adjective_to_verb(sentence: str, index: int) -> str:
    words = sentence.split()
    word = words[index].rstrip('.,!?')  # remove common punctuation
    return word + 'en'
