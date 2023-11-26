//
//  walker.hpp
//  1126
//
//  Created by Yoo taeyang on 11/26/23.
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
    
    void walkerMove();

    ofVec2f walkerPos;
    ofVec2f targetRandomPos;
    float walkerSize;
    int frameCounter;
    
};

#endif /* walker_hpp */
