#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    // setup
    ofSetFrameRate(60);
    ofSetCircleResolution(100);
    //ofSetBackgroundAuto(false);
    ofSetBackgroundColor(0);
    
    //post processing
    //post.init(ofGetWidth(), ofGetHeight());
    
    
    
    // fbo
    fbo.allocate(ofGetWidth(), ofGetHeight());
    fbo.begin();
    ofClear(255);
    fbo.end();
    
    // walker
    w.setup();
}

//--------------------------------------------------------------
void ofApp::update(){
    w.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
    // text
    //ofDrawBitmapString("나의 텍스트", ofGetWidth()/2, ofGetHeight()/2, 0.5);
    
    fbo.begin();
    ofSetColor(255);
    w.draw();
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
    int randNum = trunc(ofGetElapsedTimef());
    
    imgScreenShot.grabScreen(0, 0, ofGetWidth(), ofGetHeight());
    imgScreenShot.save("my2.png");
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
