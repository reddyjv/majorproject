import pandas as pd

# Your array of values
A = [1, 0, 1, 0, 1, 1, 1, 1, 0, 1]

# Create a DataFrame with each element of `A` as a separate column
# Define column names as `A1` to `A10`
column_names = [f'A{i+1}' for i in range(len(A))]
data = pd.DataFrame([A], columns=column_names)

# Display the DataFrame
print(data)
