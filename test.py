import sys

# To setup venv
# 1. $bash: python3 -m venv {name}
# 2. $bash: source {name}/bin/activate

# To install packages
# 3. $bash: pip install PyDrive

# To Deactivate
# 4.  deactivate

# note: Python versions before 3.3 don't have sys.base_prefix
# if you're not in virtual environment
print("Hello World")
running_in_virtualenv = sys.prefix != sys.base_prefix
print(f"Running in virtual env: {running_in_virtualenv}")





