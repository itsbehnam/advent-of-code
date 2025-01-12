#!/bin/env python

import re

# Not complexity efficient, can at least reduce number of loops
with open('../input/1.txt', 'r') as input:
    lines = [re.sub('[a-z]*', '', line.strip()) for line in input.readlines()]
    strings = [int(num[0]+num[-1]) for num in lines]
    print(sum(strings))
