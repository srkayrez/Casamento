import { Component, Input, OnInit, OnDestroy, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() endDate!: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private timerSubscription?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  private startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateTime();
      // atualizacao forcada dessa merda
      this.cdr.detectChanges(); 
    });
    this.updateTime();
  }

  private updateTime() {
    const target = new Date(this.endDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      this.timerSubscription?.unsubscribe();
      return;
    }

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / 1000 / 60) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}
