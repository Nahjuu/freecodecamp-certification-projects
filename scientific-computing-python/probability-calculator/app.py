import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        self.placeholder = []
        for color, count in kwargs.items():
            self.contents.extend([color] * count)
        print(self.contents)
        for color, count in kwargs.items():
            self.placeholder.extend([color] * count)
        print(self.placeholder)
            

    def draw(self, amount):
        self.contents = list(self.placeholder) 
        drawed = []

        if amount >= len(self.contents):
            drawed = self.contents.copy()
            self.contents.clear()

            return drawed

        for i in range(amount):
            ball = random.choice(self.contents)
            self.contents.remove(ball)
            drawed.append(ball)
        return drawed


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    expected = []
    for color, count in expected_balls.items(): 
        expected.extend([color] * count) 
    expected.sort()
    print(expected)
    success = 0
    draw_list = []
    expected.sort()
    for i in range(num_experiments):
        draw = hat.draw(num_balls_drawn)
        draw.sort()
        temp_draw = list(draw) 
        current_match = True 
        
        for ball_to_find in expected: 
            if ball_to_find in temp_draw:
                temp_draw.remove(ball_to_find)
            else:
                current_match = False 
                break
        
        if current_match:
            success += 1
        draw_list.append(draw)
        probability = round(success/num_experiments, 3)
    return probability
        

hat1 = Hat(blue=1, yellow=1)
print(experiment(hat1, {'blue':1}, 1, 1000))
