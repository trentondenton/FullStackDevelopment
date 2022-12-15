import pandas as pd
import numpy as np

# data = [50,50,47,97,49,3,53,42,26,74,82,62,37,15,70,27,36,35,48,52,63,64]

# grades = np.array(data)
# # Define an array of study hours
# study_hours = [10.0,11.5,9.0,16.0,9.25,1.0,11.5,9.0,8.5,14.5,15.5,
#                13.75,9.0,8.0,15.5,8.0,9.0,6.0,10.0,12.0,12.5,12.0]

# Create a 2D array (an array of arrays)
# student_data = np.array([study_hours, grades])

# display the array
# student_data

# df_students = pd.DataFrame({'Name': ['Dan', 'Joann', 'Pedro', 'Rosie', 'Ethan', 'Vicky', 'Frederic', 'Jimmie', 
#                                      'Rhonda', 'Giovanni', 'Francesca', 'Rajab', 'Naiyana', 'Kian', 'Jenny',
#                                      'Jakeem','Helena','Ismat','Anila','Skye','Daniel','Aisha'],
#                             'StudyHours': student_data[0],
#                             'Grade': student_data[1]}
#                 )
"""
loc
can be used based on the index of the DF
"""
# Returns Rows 0-5
# print(df_students.loc[0:5])

# Returns Row 0, Column 'Grade'
# print(df_students.loc[0, 'Grade']) 

# Returns True if the value is in the column
# print(df_students['Name']=='Aisha')

# Returns the row where the value is True
# print(df_students.loc[df_students.Name == 'Aisha']) 


"""
iloc
can be used based on their ordinal position in the DF (regardless of the index)

"""
# Returns Rows 0-4
# print(df_students.iloc[0:5])

# Returns Rows 0-4, Columns 0-1
# print(df_students.iloc[0:5, 0:2])

# Returns Row 0, Columns 1 and 2
# print(df_students.iloc[0,[1,2]]) 

df_students2 = pd.read_csv(r'students.csv', delimiter=',', header='infer')

# Returns True if the value is null
# print(df_students2.isnull())

# Returns the rows where the value is null
# print(df_students2[df_students2.isnull().any(axis=1)]) 

# Replaces null values with the mean of the column
df_students2.StudyHours = df_students2.StudyHours.fillna(df_students2.StudyHours.mean())

# Drops rows with null values
df_students2 = df_students2.dropna(axis=0, how='any') 

mean_study = df_students2.StudyHours.mean()
mean_grade = df_students2.Grade.mean()

# print('Average weekly study hours: {:.2f}\nAverage grade: {:.2f}'.format(mean_study, mean_grade))

# Returns rows where StudyHours is greater than the mean
# print(df_students2[df_students2.StudyHours > mean_study]) 

# Creates a new Series
passes = pd.Series(df_students2['Grade'] >= 60) 

# Adds a new column to the DF
df_students2 = pd.concat([df_students2, passes.rename("Pass")], axis=1) 

# Returns the mean of the StudyHours and Grade columns grouped by the Pass column
# print(df_students2.groupby(df_students2.Pass)['StudyHours', 'Grade'].mean())

# Create a DataFrame with the data sorted by Grade (descending)
df_students2 = df_students2.sort_values('Grade', ascending=False)

print(df_students2)