//
//  walker.hpp
//  1128
//
//  Created by Yoo taeyang on 11/28/23.
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
    void drawFill(float val);
    void drawNoFill(float val);
    
    ofVec2f walkerPos;
    float walkerSize;
    
    int frameCount;
    ofVec3f randomColor;
};

#endif /* walker_hpp */
