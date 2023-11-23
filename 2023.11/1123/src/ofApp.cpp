#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetCircleResolution(100);
    ofSetFrameRate(60);
    ofSetBackgroundColor(ofRandom(255), ofRandom(255), ofRandom(255));
    
    walkers.assign(100, Walker());
    
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it->setup();
    }
    
    fbo.allocate(ofGetWidth(), ofGetHeight());
}

//--------------------------------------------------------------
void ofApp::update(){
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> update();
    }

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    fbo.begin();
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        ofSetColor(127 + 127 * sin(ofGetElapsedTimef() * 0.035), 127 + 127 * sin(ofGetElapsedTimef() * 0.55), 127 + 127 * sin(ofGetElapsedTimef() * 0.01));
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
    
    ostringstream oss;
    oss << "img_" << screenShotNum << ".png";
    string fileName = oss.str();
    img.grabScreen(0, 0, ofGetWidth(), ofGetHeight());
    img.save(fileName);
    screenShotNum ++;
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
