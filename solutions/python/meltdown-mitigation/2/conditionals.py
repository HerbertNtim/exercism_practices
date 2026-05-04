"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature, neutrons_emitted):
    return temperature < 800 and neutrons_emitted > 500 and (temperature * neutrons_emitted < 500000)


def reactor_efficiency(voltage, current, theoretical_max_power):
    generated_power = voltage * current
    band = (generated_power/theoretical_max_power)*100

    if 80 <= band <= 100:
        return 'green'
    if 60 <= band < 80:
        return 'orange'
    if 30 <= band < 60:
        return 'red'
    return 'black'

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    output = temperature * neutrons_produced_per_second
    if output < threshold * 0.9:
        return "LOW"
    if threshold * 0.9 <= output <= threshold * 1.1:
        return "NORMAL"
    return "DANGER"
