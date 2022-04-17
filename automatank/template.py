from godot import *


class TankController:
    def receive_initialise(self, controls):
        # Spend your skill points here.

        controls.tank_name = "Your name here"
        controls.hex_colour = "Your colour here"

    def receive_update(self, controls, world):
        # Control the tank here.
        pass # Remove the pass after you've written code.

