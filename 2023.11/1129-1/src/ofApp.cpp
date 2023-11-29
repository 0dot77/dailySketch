#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetCircleResolution(100);
    ofSetBackgroundColor(0);
    ofSetFrameRate(60);
    
    
    walkers.assign(15, Walker());
    fbo.allocate(ofGetWidth(), ofGetHeight());
    
    for(vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> setup();
    }
    

}

//--------------------------------------------------------------
void ofApp::update(){

    for(vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> update();
    }
}

//--------------------------------------------------------------
void ofApp::draw(){

    fbo.begin();
    for(vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> draw();
    }
    fbo.end();
    
    fbo.draw(0,0);
}

//--------------------------------------------------------------
void ofApp::exit(){

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

    int randomImgNum = ofRandom(100);
    
    ostringstream oss;
    oss << "Result_" << randomImgNum << ".png";
    img.grabScreen(0, 0, ofGetWidth(), ofGetHeight());
    img.save(oss.str());
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseScrolled(int x, int y, float scrollX, float scrollY){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}

