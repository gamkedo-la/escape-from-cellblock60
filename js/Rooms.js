/**
 * room data (drawn in this order)
 * -- bg: the background tiles, always drawn "under" all other tiles, no collisions/pathfinding from this data
 * -- floor: the main layer with npcs, walls, objects, player
 * -- cealing: foreground tiles drawn "on top" of all other tiles, no collisions/pathfinding
 */
rooms = {
    "01": {
        bg: [ 
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
        ],
        floor:
            [ 
                10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                11,13,65,13,13,13,13,68,68,13,13,55,57,65,13,9,
                11,23,69,23,23,23,23,69,69,23,23,56,58,69,23,9,
                11,4,4,74,74,72,72,72,72,72,72,72,72,32,32,68,
                11,74,74,2,74,72,32,32,36,32,32,36,32,32,32,69,
                11,31,31,31,36,31,32,32,37,32,32,37,32,71,71,71,
                11,31,31,31,37,31,39,71,71,71,71,71,71,71,71,6,
                11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
                17,7,7,7,7,7,8,71,71,6,7,7,7,7,7,18
            ],
        ceiling:
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ]
      },
    "02": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
        10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
        11,13,13,20,65,13,55,20,65,13,55,20,65,13,13,13,
        11,47,47,21,69,23,56,21,69,23,56,21,69,23,23,23,
        11,48,48,0,0,0,0,0,0,0,0,0,0,0,0,0,
        11,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        11,41,0,0,0,0,0,0,0,0,0,0,0,0,0,6,
        11,42,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
        11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
        17,7,7,7,7,7,7,7,7,7,7,7,7,7,7,18
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "03": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
            11,13,65,13,13,65,13,13,65,13,13,65,13,13,65, 9,
            11,23,69,23,23,69,23,23,69,23,23,69,23,23,69, 9,
            11,76,76,76,83,76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
            11,76,76,76,76,76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
            11,76,76,76,76,76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
            11,76,76,76,76,76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
            11,76,76,76,76,76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,
            17, 7, 7, 7, 7, 7, 8, 0, 0, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "04": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,70,70,9,10,10,10,10,10,10,
            11,13,65,13,13,65,14,70,70,12,65,13,13,65,13,9,
            11,23,69,23,23,69,23,70,70,23,69,23,23,69,23,9,
            13,91,70,70,70,70,70,70,70,70,70,70,70,70,70,9,
            23,70,70,70,70,70,70,70,70,70,70,70,91,70,70,68,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,
            70,91,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            8,70,70,70,70,70,70,70,70,70,70,70,91,70,70,70,
            17,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "05": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,43,44,43,44,43,44,71,71,12,68,13,13,57,65,9,
            11,49,50,49,50,49,50,71,71,200,69,23,23,58,69,9,
            14,45,46,45,46,45,46,71,71,71,71,71,71,71,88,9,
            201,71,71,71,71,71,71,71,71,71,71,30,71,71,71,9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
             8,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17,7,7,7,7,7,8,71,71,6,7,7,7,7,7,18
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "07": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
            11,13,13,13,13,13,13,20,20,13,13,13,13,13,13,9,
            11,23,23,23,23,23,23,21,21,23,23,23,23,23,23,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,4,9,
            11,71,71,71,71,30,71,71,71,71,71,71,30,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17,7,7,7,7,7,8,71,71,6,7,7,7,7,7,18
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "09": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,13,13,13,13,19,19,13,13,13,13,13,13,9,
            11,23,23,23,23,23,23,22,22,23,23,23,23,23,23,9,
            11,91,70,70,70,70,70,70,70,70,70,70,70,70,70,9,
            11,70,70,70,70,70,70,70,70,70,70,70,70,70,91,9,
            11,70,70,70,70,70,70,70,70,70,70,70,70,70,70,9,
            11,70,70,70,70,70,70,70,70,70,70,70,70,70,70,9,
            11,91,70,70,70,70,70,70,70,70,70,70,70,70,91,9,
            17,7,7,7,7,7,8,70,70,6,7,7,7,7,7,18
            
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    "10": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,0,0,9,10,10,10,10,10,10,
            11,13,65,20,63,65,14,0,0,12,65,63,20,65,13,9,
            11,23,69,21,64,69,23,0,0,23,69,64,21,69,23,9,
            11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
            11,0,0,30,0,0,0,0,0,0,0,0,30,0,0,9,
            11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
            11,0,0,30,0,0,0,0,0,0,0,0,30,0,0,9,
            11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
            17,7,7,7,7,7,8,0,0,6,7,7,7,7,7,18
            
        ],
        ceiling:
        [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },


    "11": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,65,13,57,14,71,71,12,57,65,66,67,68,9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,82,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    
    "12": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,65,13,57,14,71,71,12,57,65,66,67,68,9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,82,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17,7,7,7,7,7,7,7,7,7,7,7,7,7,7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    
    "13": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,65,13,57,14,71,71,12,57,65,66,67,68,9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },


    "14": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,65,13,57,14,71,71,12,57,65,66,67,68,9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    
    "15": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71,9,10,10,10,10,10,10,
            11,13,13,65,13,57,14,71,71,12,57,65,66,67,68,9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69,9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,68,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,69,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,6,
            17,7,7,7,7,7,7,7,7,7,7,7,7,7,7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    
    "16": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
            68,13,13,65,13,57,13,13,13,13,57,65,66,67,68,9,
            69,23,23,69,23,58,23,23,23,23,58,69,69,69,69,9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,68,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,69,
             8,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 6,
            17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    
    "17": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
            11,13,13,65,13,57,13,13,13,13,57,65,66,67,68, 9,
            11,23,23,69,23,58,23,23,23,23,58,69,69,69,69, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            13,71,71,71,71,71,71,71,71,71,71,71,71,71,71,68,
            23,71,71,71,71,71,71,71,71,71,71,71,71,71,71,69,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
             7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "18": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,10,71,71,10,10,10,10,10,10,10,
            11,13,13,65,13,57,13,71,71,13,57,65,66,67,68, 9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            13,71,71,71,71,71,71,71,71,71,71,71,71,71,71,68,
            23,71,71,71,71,71,71,71,71,71,71,71,71,71,71,69,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
             7, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7, 7
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "19": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71, 9,10,10,10,10,10,10,
            11,13,13,65,13,57,13,71,71,13,57,65,66,67,68, 9,
            11,23,23,69,23,58,23,71,71,23,58,69,69,69,69, 9,
            13,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            23,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
             8,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "20": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71, 9,10,10,10,10,10,10,
            11,13,66,55,68,57,65,71,71,65,57,66,55,67,13, 9,
            11,23,69,56,69,58,69,71,71,69,58,69,56,69,23, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "21": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71, 9,10,10,10,10,10,10,
            11,13,13,65,59,66,13,71,71,13,68,59,65,13,13, 9,
            11,23,23,69,60,69,23,71,71,23,69,60,69,23,23, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "22": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,71,71,71,71,71,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71, 9,10, 10, 10,10,10,10,
            11,13,13,65,63,65,13,71,71,13,67, 61, 65,13,13, 9,
            11,23,23,69,64,69,23,71,71,23,69, 62, 69,23,23, 9,
            11,71,71,71,71,71,71,71,71,71,71, 71, 71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71,150,151,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71, 71, 71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71, 71, 71,71,71, 9,
            11,71,71,71,71,71,71,71,71,71,71, 71, 71,71,71, 9,
            17, 7, 7, 7, 7, 7, 8,71,71, 6, 7,  7,  7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "23": {
        bg: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        floor:
        [
            10,10,10,10,10,10,11,71,71, 9,10,10,10,10,10,10,
            11,13,13,65,55,65,13,71,71,13,65,57,65,13,13, 9,
            11,23,23,69,56,69,23,71,71,23,69,58,69,23,23, 9,
            11,71,71,71,71,71,71,71,71,71,71,71,71,71,88, 9,
            13,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            23,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
            71,71,71,71,71,71,71,71,71,71,71,71,71,71,71, 9,
             7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,18
        ],
        ceiling:
        [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    },

    "A1": {
        bg: [
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
            84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,
        ],
        floor:
            [ 
            101,102,109,109,109,109,109,109,109,109,109,109,109,109,106,100,
            101,103,110,110,110,110,110,110,110,110,110,110,110,110,107,100,
            101,0,0,0,0,88,0,0,0,0,88,0,0,0,0,12,
            101,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,
            101,112,0,0,0,0,0,0,0,0,0,0,0,0,0,95,
            101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,
            101,0,0,0,0,0,0,0,0,0,0,0,0,30,0,100,
            101,0,0,0,0,88,0,0,0,0,88,0,0,0,0,100,
            99,96,96,96,96,96,97,0,0,95,96,96,96,96,96,98
            ],
        ceiling:
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ]
      },

        
}