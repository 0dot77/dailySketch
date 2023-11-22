//
//  walker.hpp
//  1122
//
//  Created by Yoo taeyang on 11/22/23.
//

#ifndef walker_hpp
#define walker_hpp

#include <stdio.h>
#include <ofMain.h>

class Walker {
public:
    Walker();
    
    void setup();
    void update();
    void draw();
    
    ofVec2f walkerPos;
    float walkerSize;
};

#endif /* walker_hpp */
