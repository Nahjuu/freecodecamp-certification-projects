def arithmetic_arranger(problems, show_answers=False):
    if len(problems) > 5:
        return 'Error: Too many problems.'

   #Define the rows that are going to be displayed on the console as a result of calling the function.
    top_row = []
    bottom_row = []
    dashes = []
    results = []

    #this first "for" works on every problem on the problems list one by one
    #also sets the 4 variables that we use to format each operand and operator to initial conditions.
    for problem in problems:
        operand1 = ""
        operand2 = ""
        operator = None
        second_operand = False

        #Here we take every character in the problem and check if its first, second operand or the operator
        #Also check of exceptions and conditions and return a string if there is any error.
        #When we find the operator we set "second_operand" to true and start working on the second operand instead of the first one.
        for char in problem:
            if char.isalpha():
                return 'Error: Numbers must only contain digits.'
            if char.isdigit():
                if second_operand:
                    operand2 += char
                else:
                    operand1 += char
            elif char in ['+', '-']:
                operator = char
                second_operand = True
            elif char not in ['+', '-', ' ']:
                return "Error: Operator must be '+' or '-'."
            elif char == ' ':
                continue
            else:
                return 'Error: Numbers must only contain digits.'
        
        if len(operand1) > 4 or len(operand2) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        #Make the formatting of the results with the correct meassurements.
        width = max(len(operand1), len(operand2)) + 2

        top_row.append((' '*(width - len(operand1))) + operand1)
        bottom_row.append(operator + (' '*(width - len(operand2) -1 )) + operand2)
        dashes.append('-' *(width ))

        if show_answers:
            if operator == '+':
                result = str(int(operand1) + int(operand2))
            elif operator == '-':
                result = str(int(operand1) - int(operand2))
            results.append(' ' * (width - len(result)) + result)

    display_problem = '    '.join(top_row) + '\n'
    display_problem += '    '.join(bottom_row) + '\n'
    display_problem += '    '.join(dashes)

    if show_answers:
        display_problem += '\n' + '    '.join(results)
    return display_problem

print(arithmetic_arranger(["3801 - 2", "123 + 49"], show_answers=True))