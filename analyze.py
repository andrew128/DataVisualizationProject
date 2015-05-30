"""This code samples the original data by taking every thousandth line"""

input=open("PHXPROFILES.TAB.txt",'r')

"""read whole file into a variable"""
lines=list(input)

"""creates output file variable"""
output=open("output.txt",'w')
output.write("Row\n")

"""puts every thousandth line into text file"""
for i in range(0,len(lines)):
    if (i*1000<len(lines)):
        output.write(lines[i*1000].rstrip("\r\n"));
        output.write("\n");

output.close()