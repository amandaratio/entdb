
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Injectable } from '@angular/core';

@Injectable()
export class Books  {

    title: string;
    author: string;
    subject: string;
    cover: string;
    prev: string; 

}