from godot import *
from math import pi


class TankController:
    def receive_initialise(self, controls):
        # Spend your skill points here.
        '''
        list of points
        -------
        controls.bullet_speed_points: points for bullet speed
        controls.bullet_health_points: points for bullet health
        controls.tank_speed_points: points for tank speed
        controls.tank_health_points: points for tank health
        controls.regen_points: points for health regen
        '''
        controls.tank_health_points = 2 # change the number of points or the stat as you wish!
        controls.tank_name = "Your name here" # you can change the name here as well
        controls.hex_colour = "#ffffff" # you can change the color here

    def receive_update(self, controls, state):
        '''
        controls
        ---------   
        controls.shoot(angle): shoot at an angle (in radians)
        controls.accelerate(direction): accelerate in a direction (Vector2)
        ==================
        state
        ---------
        state.position: returns a Vector2 of your position (down and right are the positive directions)
        state.velocity: returns a Vector2 of your velocity
        state.health: return your current health
        state.max_health: your maximum health
        state.tanks: list of all tanks
        state.bullets: list of all bullets 
        '''
        # Control the tank here.
        controls.shoot(pi / 2) # shoot 90 degree down
        # replace the code here by whatever you want