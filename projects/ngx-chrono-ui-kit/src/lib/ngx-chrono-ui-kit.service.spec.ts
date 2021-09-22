import { TestBed } from '@angular/core/testing'

import { NgxChronoUiKitService } from 'ngx-chrono-ui-kit'

describe('NgxChronoUiKitService', () => {
  let service: NgxChronoUiKitService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(NgxChronoUiKitService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
