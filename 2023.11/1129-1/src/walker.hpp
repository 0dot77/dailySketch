//
//  walker.hpp
//  1129
//
//  Created by Yoo taeyang on 11/29/23.
//

#ifndef walker_hpp
#define walker_hpp

#include <stdio.h>
#include "ofMain.h"

class Walker
{
public:
    Walker();
    ~Walker();
    
    void setup();
    void update();
    void draw();
    
    ofVec2f walkerPos;
    float walkerSize;
    ofVec2f targetPos;
    
    int frameRate;
    float randomInterpolateTime;
};

#endif /* walker_hpp */

