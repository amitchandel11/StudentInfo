import { TestBed } from '@angular/core/testing';

import { StudentInfoServiceService } from './student-info.service.service';

describe('StudentInfoServiceService', () => {
  let service: StudentInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
