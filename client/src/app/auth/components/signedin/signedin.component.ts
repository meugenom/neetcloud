import { AuthService } from '../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { registerAction, signOutAction } from '../../store/actions/auth.action';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-signedin',
	templateUrl: './signedin.component.html',
	styleUrls: ['./signedin.component.sass']
})
export class SignedinComponent implements OnInit {

	userForm!: FormGroup;

	constructor(
		private store: Store) {}

	ngOnInit() {
	}

	signOut() {
		console.log('Sign Out')
		this.store.dispatch(signOutAction());
		
	}

}
