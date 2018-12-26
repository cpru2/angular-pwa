import {Component} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NewsletterService} from './newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = 'BDB4fBZ17DSFhXmGoGu_59V3b8_6bFQObAopxjaRe5LzHAqw12G74xI4jOi8BP__9zPe0p1fBTAbAkwOj-wVYuA';

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) {
  }

  public subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
