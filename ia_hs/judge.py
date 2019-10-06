#!/usr/bin/env python3
from joblib import load
import sys


clf = load('clf_v2.joblib')

t = sys.argv[1]

if(t == "-C"):
    line = input(">")
    while line != "q":

        if(clf.predict([line])) == ['1']:
            print("[1] ==> no ofensiu")
        else:
            print("[0] ==> ofensiu")
        line = input(">")
else:
    text = sys.argv[1]
    if(clf.predict([text]) == ['1']):
        print("[1] ==> no ofensiu")
    else:
        print(clf.predict([text]))
        print("[0] ==> ofensiu")    

