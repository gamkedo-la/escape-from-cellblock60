TILES = {

    TILE_EMPTY: 0,
    TILE_GROUND: 1,
    TILE_PLAYER: 2,
    TILE_GOAL: 3,
    TILE_DOOR: 5,
    TILE_WALL_1: 6,
    TILE_WALL_2: 7,
    TILE_WALL_3: 8,
    TILE_WALL_4: 9,
    TILE_WALL_5: 10,
    TILE_WALL_6: 11,
    TILE_WALL_7: 12,
    TILE_WALL_8: 13,
    TILE_WALL_9: 14,
    TILE_WALL_10: 15,
    TILE_WALL_11: 16,
    TILE_WALL_12: 17,
    TILE_WALL_13: 18,
    TILE_WALL_14: 20,
    TILE_WALL_15: 21,
    TILE_WALL_16: 23,
    TILE_KEY: 4,
    TILE_DOOR_YELLOW_FRONT_TOP: 19,
    TILE_DOOR_YELLOW_FRONT_BOTTOM: 22,
    TILE_DOOR_YELLOW_FRONT_TOP_OPEN: 24,
    TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN: 25,
    TILE_ENEMY: 30,
    TILE_PRISON_WALL_1: 31,
    TILE_PRISON_WALL_2: 32,
    TILE_PRISON_WALL_3: 33,
    TILE_PRISON_WALL_4: 34,
    TILE_PRISON_WALL_5: 35,
    TILE_PRISON_GATE_TOP: 36,
    TILE_PRISON_GATE_BOTTOM: 37,
    TILE_PRISON_GATE_TOP_OPEN: 38,
    TILE_PRISON_GATE_BOTTOM_OPEN: 39,
    TILE_DUNGEON_STAIRS_TOP_1: 40,
    TILE_DUNGEON_STAIRS_MIDDLE_1: 41,
    TILE_DUNGEON_STAIRS_BOTTOM_1: 42,
    TILE_CABINET_1_TL: 43,
    TILE_CABINET_1_TR: 44,
    TILE_CABINET_1_BL: 45,
    TILE_CABINET_1_BR: 46,
    TILE_WHISKEY_BARREL_TOP: 47,
    TILE_WHISKEY_BARREL_BOTTOM: 48,
    TILE_CABINET_1_ML: 49,
    TILE_CABINET_1_MR: 50,
    TILE_TREASURE_CHEST: 51,
    TILE_TREASURE_CHEST_OPEN: 52,
    TILE_DOOR_YELLOW_SIDE_CLOSED: 53,
    TILE_DOOR_YELLOW_SIDE_OPEN: 54,
    TILE_DUNGEON_ART_1_TOP: 55,
    TILE_DUNGEON_ART_1_BOTTOM: 56,
    TILE_DUNGEON_ART_2_TOP: 57,
    TILE_DUNGEON_ART_2_BOTTOM: 58,
    TILE_DUNGEON_ART_3_TOP: 59,
    TILE_DUNGEON_ART_3_BOTTOM: 60,
    TILE_DUNGEON_ART_4_TOP: 61,
    TILE_DUNGEON_ART_4_BOTTOM: 62,
    TILE_DUNGEON_ART_5_TOP: 63,
    TILE_DUNGEON_ART_5_BOTTOM: 64,
    TILE_TORCH_1: 65,
    TILE_TORCH_2: 66,
    TILE_TORCH_3: 67,
    TILE_TORCH_4: 68,
    TILE_TORCH_1_BOTTOM: 69,
  
    TILE_FLOOR_TILE: 70,
    TILE_FLOOR_WOOD: 71,
    TILE_FLOOR_SLAB_1: 72,
    TILE_FLOOR_SLAB_2: 73,
    TILE_FLOOR_SLAB_3: 74,
    TILE_FLOOR_SLAB_4: 75,
    TILE_SPIKE_1: 76,
    TILE_SPIKE_2: 77,
    TILE_SPIKE_3: 78,
    TILE_SPIKE_4: 79,
    TILE_TABLE_LEFT: 80,
    TILE_TABLE_RIGHT: 81,
  
    TILE_SWORD: 82,
  
    TILE_OCTOGOLEM: 83,

    TILE_FLOOR_CAVE_1: 84,
    TILE_FLOOR_CAVE_2: 85,
    TILE_FLOOR_CAVE_3: 86,
    TILE_FLOOR_CAVE_4: 87,
    TILE_POTTERY_1: 88,
    TILE_POTTERY_2: 89,
    TILE_POTTERY_3: 90,
    TILE_SKELETON: 91,

    TILE_CEIL_CAVE_1: 92,
    TILE_CEIL_CAVE_2: 93,
    TILE_CEIL_CAVE_3: 94,
    TILE_WALL_CAVE_1_TOP: 95,
    TILE_WALL_CAVE_2_TOP: 96,
    TILE_WALL_CAVE_3_TOP: 97,
    TILE_WALL_CAVE_4_TOP: 98,
    TILE_WALL_CAVE_5_TOP: 99,
    TILE_WALL_CAVE_6_TOP: 100,
    TILE_WALL_CAVE_7_TOP: 101,
    TILE_WALL_CAVE_8_TOP: 102,
    TILE_WALL_CAVE_8_BOTTOM: 103,
    TILE_WALL_CAVE_9_TOP: 104,
    TILE_WALL_CAVE_10_TOP: 105,
    TILE_WALL_CAVE_11_TOP: 106,
    TILE_WALL_CAVE_11_BOTTOM: 107,
    TILE_WALL_CAVE_12_TOP: 108,
    TILE_WALL_CAVE_13_TOP: 109,
    TILE_WALL_CAVE_13_BOTTOM: 110,
    TILE_WALL_CAVE_14_TOP: 111,
    
  };

  for(const [key, value] of Object.entries(TILES)) {
    window[key] = value;
  }
  
  transparentTiles = [
  TILE_GOAL ,
  TILE_KEY ,
  TILE_SWORD ,
  TILE_PRISON_WALL_1 ,
  TILE_PRISON_WALL_2 ,
  TILE_PRISON_WALL_3 ,
  TILE_PRISON_GATE_TOP ,
  TILE_PRISON_GATE_BOTTOM ,
  TILE_PRISON_GATE_TOP_OPEN ,
  TILE_PRISON_GATE_BOTTOM_OPEN ,
  TILE_DOOR_YELLOW_FRONT_BOTTOM ,
  TILE_DOOR_YELLOW_FRONT_TOP ,
  TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN ,
  TILE_DOOR_YELLOW_FRONT_TOP_OPEN ,
  TILE_WHISKEY_BARREL_BOTTOM ,
  TILE_CABINET_1_BL ,
  TILE_CABINET_1_BR ,
  TILE_TREASURE_CHEST ,
  TILE_TREASURE_CHEST_OPEN ,
  TILE_DOOR ,
  TILE_TABLE_LEFT ,
  TILE_TABLE_RIGHT,
  TILE_POTTERY_1,
  TILE_POTTERY_2,
  TILE_POTTERY_3,
  ]
  
  walkableTiles = [
    TILE_EMPTY,
    TILE_GROUND,
    TILE_DOOR_YELLOW_FRONT_TOP_OPEN,
    TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN,
    TILE_PRISON_GATE_TOP_OPEN,
    TILE_PRISON_GATE_BOTTOM_OPEN,
    TILE_DOOR_YELLOW_SIDE_OPEN,
    TILE_FLOOR_SLAB_1,
    TILE_FLOOR_CAVE_1,
    TILE_FLOOR_TILE,
    TILE_FLOOR_WOOD,
    TILE_SPIKE_1
  ]

  tileAnims = {
    [TILE_SPIKE_1]: {
      frameRate: 5,
      frames: [
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_1,
        TILE_SPIKE_2,
        TILE_SPIKE_3,
        TILE_SPIKE_4,
        TILE_SPIKE_3,
        TILE_SPIKE_2,
        TILE_SPIKE_1
      ],
      drawParticles: function (tileLeftEdgeX, tileTopEdgeY) {
        trap_particles(tileLeftEdgeX+Math.random()*TILE_W,tileTopEdgeY+Math.random()*TILE_H);
      }
    },
      [TILE_TORCH_1]: {
        frameRate: 5,
        frames: [
          TILE_TORCH_1,
          TILE_TORCH_2,
          TILE_TORCH_3,
          TILE_TORCH_4
        ],
        drawParticles: function (tileLeftEdgeX, tileTopEdgeY) {
          torch_particles(tileLeftEdgeX+TILE_W/2,tileTopEdgeY+TILE_H/3*2);
        }
      },
      [TILE_TORCH_2]: {
        frameRate: 5,
        frames: [
          TILE_TORCH_2,
          TILE_TORCH_3,
          TILE_TORCH_4,
          TILE_TORCH_1
        ],
        drawParticles: function (tileLeftEdgeX, tileTopEdgeY) {
          torch_particles(tileLeftEdgeX+TILE_W/2,tileTopEdgeY+TILE_H/3*2);
        }
      },
      [TILE_TORCH_3]: {
        frameRate: 5,
        frames: [
          TILE_TORCH_3,
          TILE_TORCH_4,
          TILE_TORCH_1,
          TILE_TORCH_2
        ],
        drawParticles: function (tileLeftEdgeX, tileTopEdgeY) {
          torch_particles(tileLeftEdgeX+TILE_W/2,tileTopEdgeY+TILE_H/3*2);
        }
      },
      [TILE_TORCH_4]: {
        frameRate: 5,
        frames: [
          TILE_TORCH_4,
          TILE_TORCH_1,
          TILE_TORCH_2,
          TILE_TORCH_3
        ],
        drawParticles: function (tileLeftEdgeX, tileTopEdgeY) {
          torch_particles(tileLeftEdgeX+TILE_W/2,tileTopEdgeY+TILE_H/3*2);
        }
      }
  }

  const animatedTiles = Array.from(Object.keys(tileAnims))
  animatedTiles.forEach((item, index) => {
    animatedTiles[index] = parseInt(item)
  })

