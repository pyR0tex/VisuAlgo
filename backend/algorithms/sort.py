# sort.py
'''
Algorithms Implementation
'''

def sorting_algorithm(arr):
    print("sorting algorithm")

    steps = []
    n = len(arr)
    array = arr[:]

    for i in range(n):
        for j in range(0, n-i-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
            steps.append(array[:])

    return steps