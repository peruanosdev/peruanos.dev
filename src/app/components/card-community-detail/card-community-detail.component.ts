import { Component, Input, input } from '@angular/core';
import { ICommunity } from '../../../../model/community.model';

@Component({
  selector: 'app-card-community-detail',
  standalone: true,
  imports: [],
  templateUrl: './card-community-detail.component.html',
  styleUrl: './card-community-detail.component.scss'
})
export class CardCommunityDetailComponent {
  @Input() item: ICommunity = {} as ICommunity;
}
