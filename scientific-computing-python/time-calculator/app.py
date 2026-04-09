def add_time(start, duration, day=None):
    hora_formato = ''
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    both_nums = []
    start_hour = []
    start_minute = []
    PM_AM = ''

    #For para armar la variable "hora", formada por start_hour y start_minute que son los numeros antes y despues de los ':'
    for char in start:
        if char.isalpha():
            PM_AM += char
        if char.isdigit():
            both_nums += char
    start_hour = both_nums[:]

    if len(both_nums) == 4:
        start_minute.append(start_hour.pop(2))  
        start_minute.append(start_hour.pop(2))  
    if len(both_nums) == 3:
        start_minute.append(start_hour.pop(1))  
        start_minute.append(start_hour.pop(1)) 

    #Conseguir las horas de duration_hour y duration_minute, como hice con start.
    duration_both_nums = []
    duration_hour = []
    duration_minute = []

    for char in duration:
        if char.isdigit():
            duration_both_nums += char
            duration_hour = duration_both_nums[:]
         
    if len(duration_both_nums) == 4:
        duration_minute.append(duration_hour.pop(2))  
        duration_minute.append(duration_hour.pop(2))  

    if len(duration_both_nums) == 3:
        duration_minute.append(duration_hour.pop(1))  
        duration_minute.append(duration_hour.pop(1))
    if len(duration_both_nums) == 5:
        duration_minute.append(duration_hour.pop(3))  
        duration_minute.append(duration_hour.pop(3))
    #Pasar los valores de duration y start hours a string, porque son listas.
    if len(start_hour) == 2:
        start_hour = str(start_hour[0]) + str(start_hour[1])
    else:
        start_hour = str(start_hour[0])
    start_minute = str(start_minute[0]) + str(start_minute[1])
    if len(duration_hour) == 3:
        duration_hour = str(duration_hour[0]) + str(duration_hour[1]) + str(duration_hour[2])
    elif len(duration_hour) == 2:
        duration_hour = str(duration_hour[0]) + str(duration_hour[1])
    else:
        duration_hour = str(duration_hour[0])
    duration_minute = str(duration_minute[0]) + str(duration_minute[1])

    #hago formato de 24hs, agrega 12 horas al PM y resetea el día en AM.
    if PM_AM == "PM" and start_hour != 12:
        start_hour = int(start_hour)
        start_hour += 12
    elif PM_AM == "AM" and start_hour == 12:
        start_hour = 0 
  
    #Juntar valores de tiempos, duration y start
    end_minute = int(start_minute) + int(duration_minute)
    end_hour = int(start_hour) + int(duration_hour) + (int(end_minute) // 60)
    end_minute == int(end_minute)
    end_minute %= 60

    # Calcular la cantidad de días que pasan.
    days_later = int(end_hour) // 24
    end_hour == int(end_hour)
    end_hour %= 24

    #pasar el formato de end_hour a PM AM, ahora solo es un valor numerico.
    if end_hour == 0:
        end_period = "AM"
        end_hour = 12
    elif end_hour < 12:
        end_period = "AM"
    elif end_hour == 12:
        end_period = "PM"
    else:
        end_period = "PM"
        end_hour -= 12
    
    # Display del tiempo final
    end_time = f"{end_hour}:{end_minute:02} {end_period}"

    #Calcular día de la semana
    if day:
        day_index = (days_of_week.index(day.capitalize()) + days_later) % 7
        end_day = days_of_week[day_index]
        end_time += f", {end_day}"
    #Sumar Días que pasaron
    if days_later == 1:
        end_time += " (next day)"
    elif days_later > 1:
        end_time += f" ({days_later} days later)"
    
   

    return end_time
print(add_time('2:59 AM', '24:00', 'saturDay'))
