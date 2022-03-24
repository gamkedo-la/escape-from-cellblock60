var playerPic = document.createElement("img");
var playerIdlePic = document.createElement("img");
var ghostPic = document.createElement("img");
var skeletonPic = document.createElement("img");
var ghostWispPic = document.createElement("img");
var projectilePic = document.createElement('img');
var projectileParticlePic = document.createElement('img');
var spookyEye = document.createElement("img");
var smokePic = document.createElement("img");
var bloodPic = document.createElement("img");
var swordSwooshEastPic = document.createElement("img");
var swordSwooshWestPic = document.createElement("img");
var swordSwooshNorthPic = document.createElement("img");
var swordSwooshSouthPic = document.createElement("img");
var octoGolemPic = document.createElement("img");
var chain1Pic = document.createElement("img");
var chain2Pic = document.createElement("img");
var shadowPic = document.createElement("img");
var redSparkPic = document.createElement("img");
var sparklePic = document.createElement("img");
var characterShadow = document.createElement("img");

var tilePics = [];

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if(picsToLoad == 0) { // last image loaded?
    loadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload=countLoadedImageAndLaunchIfReady;
  imgVar.src="images/"+fileName;
}

function loadImageForTileCode(tileData) {
  let tileCode = tileData.tileType
  let fileName = tileData.theFile
  tilePics[tileCode] = {
    img: null,
    imgX: tileData.imgX,
    imgY: tileData.imgY
  }
  if (tileData.isWall) {
    wallTiles[tileCode] = true;
  }
  if (tileData.isStairsUp) {
    stairUpTiles[tileCode] = true;
  }
  if (tileData.isStairsDown) {
    stairDownTiles[tileCode] = true;
  }
  tilePics[tileCode].img = document.createElement("img");
  beginLoadingImage(tilePics[tileCode].img,fileName);
}

function loadImages() {

  var imageList = [
    {varName:playerPic, theFile:"warrior.png"},
	{varName:playerIdlePic, theFile:"warrior-idle.png"},
    {varName:ghostPic, theFile:"ghost.png"},
    {varName:ghostWispPic, theFile:"ghostwisp.png"},
    {varName:skeletonPic, theFile:"skeleton.png"},
    {varName:projectilePic, theFile:"projectile.png"},
    {varName:projectileParticlePic, theFile:"projectileParticle.png"},
    {varName:spookyEye, theFile:"spookyEye.png"},
    {varName:smokePic, theFile:"smoke.png"},
    {varName:bloodPic, theFile:"blood.png"},
    {varName:swordSwooshEastPic, theFile:"sword_swoosh_east.png"},
    {varName:swordSwooshWestPic, theFile:"sword_swoosh_west.png"},
    {varName:swordSwooshNorthPic, theFile:"sword_swoosh_north.png"},
    {varName:swordSwooshSouthPic, theFile:"sword_swoosh_south.png"},
    {varName:redSparkPic, theFile:"redSpark.png"},
    {varName:sparklePic, theFile:"sparkle.png"},
    {varName:characterShadow, theFile:"character_shadow.png"},
    {varName:octoGolemPic, theFile:"octoGolem.png"},
    {varName:chain1Pic, theFile:"chain1.png"},
    {varName:chain2Pic, theFile:"chain2.png"},
    {varName:shadowPic, theFile:"wall_shadows.png"},
    {tileType:TILE_GROUND, imgX: 0, imgY: 0, theFile:"world_ground.png"},
    //ROW 1
    {tileType:TILE_WALL_1, imgX: 0, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_2, imgX: 50, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_3, imgX: 100, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_4, imgX: 150, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_5, imgX: 200, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_6, imgX: 250, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
	  {tileType:TILE_WALL_7, imgX: 300, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_8, imgX: 350, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_9, imgX: 400, imgY: 0, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_DUNGEON_STAIRS_TOP_1, imgX: 450, imgY: 0, theFile:"dungeonWalls.png"},
    //ROW 2
    {tileType:TILE_WALL_11, imgX: 0, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_12, imgX: 50, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_13, imgX: 100, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_14, imgX: 150, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_15, imgX: 200, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_16, imgX: 250, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_WALL_10, imgX: 350, imgY: 50, theFile:"dungeonWalls.png", isWall: true},
    {tileType:TILE_DUNGEON_STAIRS_MIDDLE_1, imgX: 450, imgY: 50, theFile:"dungeonWalls.png"},
    //ROW 3
    {tileType:TILE_CABINET_1_TL, imgX: 0, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_CABINET_1_TR, imgX: 50, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_CABINET_1_BL, imgX: 100, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_CABINET_1_BR, imgX: 150, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_WHISKEY_BARREL_TOP, imgX: 250, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_DOOR_YELLOW_SIDE_CLOSED, imgX: 350, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_DOOR_YELLOW_SIDE_OPEN, imgX: 400, imgY: 100, theFile:"dungeonWalls.png"},
    {tileType:TILE_DUNGEON_STAIRS_BOTTOM_1, imgX: 450, imgY: 100, theFile:"dungeonWalls.png", isStairsUp: true},
    //ROW 4
    {tileType:TILE_CABINET_1_ML, imgX: 0, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_CABINET_1_MR, imgX: 50, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_TREASURE_CHEST, imgX: 100, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_TREASURE_CHEST_OPEN, imgX: 150, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_WHISKEY_BARREL_BOTTOM, imgX: 250, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_POTTERY_1, imgX: 300, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_POTTERY_2, imgX: 350, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_POTTERY_3, imgX: 400, imgY: 150, theFile:"dungeonWalls.png"},
    {tileType:TILE_DUNGEON_STAIRS_DOWN_1, imgX: 450, imgY: 150, theFile:"dungeonWalls.png", isStairsDown: true},

    //END SPRITE SHEET

    {tileType:TILE_KEY, imgX: 0, imgY: 0, theFile:"items.png"},
    {tileType:TILE_SWORD, imgX: 50, imgY: 0, theFile:"items.png"},

    // there is also a regular sprite above... fixme?
    {tileType:TILE_OCTOGOLEM, imgX: 0, imgY: 0, theFile:"octoGolem.png"},
    
    {tileType:TILE_PRISON_WALL_1, imgX: 0, imgY: 0, theFile:"prisonWall_1.png"},
    {tileType:TILE_PRISON_WALL_2, imgX: 0, imgY: 0, theFile:"prisonWall_2.png"},
    {tileType:TILE_PRISON_WALL_3, imgX: 0, imgY: 0, theFile:"prisonWall_3.png"},
    {tileType:TILE_PRISON_WALL_4, imgX: 0, imgY: 0, theFile:"prisonWall_4.png"},
    {tileType:TILE_PRISON_WALL_5, imgX: 0, imgY: 0, theFile:"prisonWall_5.png"},
    {tileType:TILE_PRISON_GATE_TOP, imgX: 0, imgY: 0, theFile:"prisonGate_Top.png"},
    {tileType:TILE_PRISON_GATE_BOTTOM, imgX: 0, imgY: 0, theFile:"prisonGate_Botom.png"},
    {tileType:TILE_PRISON_GATE_TOP_OPEN, imgX: 0, imgY: 0, theFile:"prisonGate_Top_Open.png"},
    {tileType:TILE_PRISON_GATE_BOTTOM_OPEN, imgX: 0, imgY: 0, theFile:"prisonGate_Botom_Open.png"},

    {tileType:TILE_DOOR_YELLOW_FRONT_TOP, imgX: 0, imgY: 0, theFile:"yellowDoor_Front_Top.png"},	
    {tileType:TILE_DOOR_YELLOW_FRONT_BOTTOM, imgX: 0, imgY: 0, theFile:"yellowDoor_Front_Bottom.png"},
    {tileType:TILE_DOOR_YELLOW_FRONT_TOP_OPEN, imgX: 0, imgY: 0, theFile:"yellowDoor_Front_Top_Open.png"},	
    {tileType:TILE_DOOR_YELLOW_FRONT_BOTTOM_OPEN, imgX: 0, imgY: 0, theFile:"yellowDoor_Front_Bottom_Open.png"},
    {tileType:TILE_TABLE_LEFT, imgX: 0, imgY: 0, theFile:"table_left.png"},
    {tileType:TILE_TABLE_RIGHT, imgX: 0, imgY: 0, theFile:"table_right.png"},

    // dungeon art
    {tileType:TILE_DUNGEON_ART_1_TOP, imgX: 0, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_1_BOTTOM, imgX: 0, imgY: 50, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_2_TOP, imgX: 50, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_2_BOTTOM, imgX: 50, imgY: 50, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_3_TOP, imgX: 100, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_3_BOTTOM, imgX: 100, imgY: 50, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_4_TOP, imgX: 150, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_4_BOTTOM, imgX: 150, imgY: 50, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_5_TOP, imgX: 200, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_DUNGEON_ART_5_BOTTOM, imgX: 200, imgY: 50, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_TORCH_1, imgX: 300, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_TORCH_2, imgX: 350, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_TORCH_3, imgX: 400, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_TORCH_4, imgX: 450, imgY: 0, theFile:"dungeonArt.png", isWall: true},
    {tileType:TILE_TORCH_1_BOTTOM, imgX: 300, imgY: 50, theFile:"dungeonArt.png", isWall: true},

    // floors
    {tileType:TILE_FLOOR_TILE, imgX: 0, imgY: 0, theFile:"floors.png"},
    {tileType:TILE_FLOOR_WOOD, imgX: 50, imgY: 0, theFile:"floors.png"},
    {tileType:TILE_FLOOR_SLAB_1, imgX: 0, imgY: 50, theFile:"floors.png"},
    {tileType:TILE_FLOOR_SLAB_2, imgX: 50, imgY: 50, theFile:"floors.png"},
    {tileType:TILE_FLOOR_SLAB_3, imgX: 100, imgY: 50, theFile:"floors.png"},
    {tileType:TILE_FLOOR_SLAB_4, imgX: 150, imgY: 50, theFile:"floors.png"},
    {tileType:TILE_SPIKE_1, imgX: 0, imgY: 100, theFile:"floors.png"},
    {tileType:TILE_SPIKE_2, imgX: 50, imgY: 100, theFile:"floors.png"},
    {tileType:TILE_SPIKE_3, imgX: 100, imgY: 100, theFile:"floors.png"},
    {tileType:TILE_SPIKE_4, imgX: 150, imgY: 100, theFile:"floors.png"},

    // cave
    {tileType:TILE_FLOOR_CAVE_1, imgX: 0, imgY: 0, theFile:"cave.png"},
    {tileType:TILE_FLOOR_CAVE_2, imgX: 50, imgY: 0, theFile:"cave.png"},
    {tileType:TILE_FLOOR_CAVE_3, imgX: 100, imgY: 0, theFile:"cave.png"},
    {tileType:TILE_FLOOR_CAVE_4, imgX: 150, imgY: 0, theFile:"cave.png"},
    {tileType:TILE_CEIL_CAVE_1, imgX: 0, imgY: 50, theFile:"cave.png", isWall: true},
    {tileType:TILE_CEIL_CAVE_2, imgX: 50, imgY: 50, theFile:"cave.png", isWall: true},
    {tileType:TILE_CEIL_CAVE_3, imgX: 100, imgY: 50, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_1_TOP, imgX: 350, imgY: 0, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_2_TOP, imgX: 400, imgY: 0, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_3_TOP, imgX: 450, imgY: 0, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_4_TOP, imgX: 350, imgY: 50, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_5_TOP, imgX: 450, imgY: 50, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_6_TOP, imgX: 300, imgY: 100, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_7_TOP, imgX: 500, imgY: 100, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_8_TOP, imgX: 300, imgY: 150, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_8_BOTTOM, imgX: 300, imgY: 200, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_9_TOP, imgX: 350, imgY: 150, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_10_TOP, imgX: 450, imgY: 150, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_11_TOP, imgX: 500, imgY: 150, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_11_BOTTOM, imgX: 500, imgY: 200, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_12_TOP, imgX: 350, imgY: 200, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_13_TOP, imgX: 400, imgY: 200, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_13_BOTTOM, imgX: 400, imgY: 250, theFile:"cave.png", isWall: true},
    {tileType:TILE_WALL_CAVE_14_TOP, imgX: 450, imgY: 200, theFile:"cave.png", isWall: true},
	
	  // brokenBricks
    {tileType:TILE_FLOOR_BROKENBRICKS_1, imgX: 0, imgY: 0, theFile:"brokenBricks.png"},
    {tileType:TILE_FLOOR_BROKENBRICKS_2, imgX: 50, imgY: 0, theFile:"brokenBricks.png"},
    {tileType:TILE_FLOOR_BROKENBRICKS_3, imgX: 100, imgY: 0, theFile:"brokenBricks.png"},
    {tileType:TILE_FLOOR_BROKENBRICKS_4, imgX: 150, imgY: 0, theFile:"brokenBricks.png"},
    {tileType:TILE_CEIL_BROKENBRICKS_1, imgX: 0, imgY: 50, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_CEIL_BROKENBRICKS_2, imgX: 50, imgY: 50, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_CEIL_BROKENBRICKS_3, imgX: 100, imgY: 50, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_1_TOP, imgX: 350, imgY: 0, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_2_TOP, imgX: 400, imgY: 0, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_3_TOP, imgX: 450, imgY: 0, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_4_TOP, imgX: 350, imgY: 50, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_5_TOP, imgX: 450, imgY: 50, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_6_TOP, imgX: 300, imgY: 100, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_7_TOP, imgX: 500, imgY: 100, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_8_TOP, imgX: 300, imgY: 150, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_8_BOTTOM, imgX: 300, imgY: 200, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_9_TOP, imgX: 350, imgY: 150, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_10_TOP, imgX: 450, imgY: 150, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_11_TOP, imgX: 500, imgY: 150, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_11_BOTTOM, imgX: 500, imgY: 200, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_12_TOP, imgX: 350, imgY: 200, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_13_TOP, imgX: 400, imgY: 200, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_13_BOTTOM, imgX: 400, imgY: 250, theFile:"brokenBricks.png", isWall: true},
    {tileType:TILE_WALL_BROKENBRICKS_14_TOP, imgX: 450, imgY: 200, theFile:"brokenBricks.png", isWall: true},

    ];

  picsToLoad = imageList.length;

  for(var i=0;i<imageList.length;i++) {
    if(imageList[i].tileType != undefined) {
      loadImageForTileCode(imageList[i]);
    } else {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } // end of else
  } // end of for imageList

} // end of function loadImages
