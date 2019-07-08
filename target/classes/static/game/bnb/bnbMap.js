﻿//背景地图
var townGroundMap = [ 
                        [ 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1 ], 
                        [ 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2, 1 ], 
                        [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], 
                        [ 3, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2 ], 
                        [ 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1 ], 
                        [ 1, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2 ], 
                        [ 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1 ], 
                        [ 1, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2 ], 
                        [ 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1 ], 
                        [ 1, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2 ], 
                        [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], 
                        [ 3, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2 ], 
                        [ 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1 ]
                     ];

function DrawGameBackground(){
    for (var i = 0; i < townGroundMap.length; i++) {
        for(var j = 0; j < townGroundMap[i].length; j++){
            var townGroundUnit = new Bitmap('Pic/TownGround.png');
            townGroundUnit.Size = new Size(40, 40);
            townGroundUnit.StartPoint = new Point((townGroundMap[i][j] - 1) * 40, 0);

            townGroundUnit.Position = new Point(20 + 40 * j, 40 + 40 * i);
            townGroundUnit.ZIndex = 1;
            
            //townGroundUnit.Click = function(e){
            //   var p = GetMapIDByRelativePoint(e.offsetX - 20, e.offsetY - 40);
            //   if(p != null){
            //       role1.MoveTo(p.X, p.Y);
            //   }
            //}
        }
    }
}


//障碍物地图
var townBarrierMap = [ 
                        [ 0, 3, 1, 5, 1, 7, 0, 7, 0, 7, 1, 4, 1, 4, 0 ],
                        [ 0, 0, 3, 0, 0, 1, 0, 0, 0, 1, 2, 1, 2, 0, 0 ],
                        [ 3, 5, 3, 5, 1, 7, 3, 7, 3, 7, 1, 4, 1, 4, 0 ],
                        [ 0, 3, 2, 1, 7, 3, 3, 1, 3, 3, 7, 1, 2, 1, 2 ],
                        [ 1, 7, 1, 7, 3, 3, 7, 0, 7, 3, 3, 7, 1, 7, 1 ],
                        [ 2, 0, 3, 0, 0, 7, 1, 1, 1, 7, 0, 0, 3, 0, 2 ],
                        [ 2, 7, 1, 7, 0, 2, 3, 3, 3, 2, 0, 7, 1, 7, 2 ],
                        [ 2, 0, 3, 0, 0, 7, 1, 1, 1, 7, 0, 0, 3, 0, 2 ],
                        [ 1, 7, 1, 7, 3, 3, 7, 2, 7, 3, 3, 7, 1, 7, 1 ],
                        [ 2, 1, 2, 1, 7, 3, 3, 1, 3, 3, 7, 1, 2, 1, 2 ],
                        [ 0, 4, 1, 4, 1, 7, 3, 7, 3, 7, 1, 6, 1, 6, 0 ],
                        [ 0, 0, 2, 1, 2, 1, 0, 0, 0, 1, 2, 1, 2, 0, 0 ],
                        [ 0, 4, 1, 4, 1, 7, 0, 7, 0, 7, 1, 6, 1, 6, 0 ]
                     ];
//障碍物地图
var townBarrierMap1 = [ 
                        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3 ],
                        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ]
                     ];

//所处的地图区块
function FindMapID(point) {
    point.X = point.X - 20;
    point.Y = point.Y - 40;
    //坐标范围
    if (point.X >= 0 && point.Y >= 0 && point.X < 600 && point.Y < 520) {
        var xunitNumber = parseInt(point.X / 40, 10);
        var yunitNumber = parseInt(point.Y / 40, 10);

        return {X : xunitNumber, Y : yunitNumber};
    }
    return null;
}