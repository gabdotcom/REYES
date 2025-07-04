import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    oldPassword = '';
    newPassword = '';
    message = '';

    constructor(private http: HttpClient) { }

    onChangePassword() {
        const payload = {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
        };

        const token = localStorage.getItem('token'); // adjust if you store token differently

        this.http.post('http://localhost:3000/api/user/change-password', payload, {
            headers: { Authorization: `Bearer ${token}` }
        }).subscribe({
            next: (res: any) => {
                this.message = res.message || 'Password changed successfully.';
            },
            error: (err) => {
                this.message = err.error?.message || 'Error changing password.';
            }
        });
    }
}
