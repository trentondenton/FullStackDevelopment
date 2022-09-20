import random

def grim_reaper():
    death_causes = ['Heart Attack', 'The Hiccups',
                    'Spontaneous Combustion', 'Gypsy Curse', 'Snu Snu']
    days_left = random.randint(1, 365)
    cause_of_death = random.choice(death_causes)

    return f"""
    You have {days_left} days left to live.
    Your cause of death is: {cause_of_death}!
    """
print(grim_reaper())