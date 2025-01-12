#!/bin/env python

import re

# Not complexity efficient, can at least reduce number of loops
# I don't like using .replace() here. Replace replace.
with open('../input/1.txt', 'r') as input:
    lines = [line.replace('one', 'o1e')
        .replace('two', 't2o')
        .replace('three', 't3r')
        .replace('four', 'f4r')
        .replace('five', 'f5e')
        .replace('six', 's6x')
        .replace('seven', 's7n')
        .replace('eight', 'e8t')
        .replace('nine', 'n9e')
        .strip() for line in input.readlines()]
    clean_lines = [re.sub('[a-z]*', '', line.strip()) for line in lines] 
    strings = [int(num[0]+num[-1]) for num in clean_lines]
    print(sum(strings))
