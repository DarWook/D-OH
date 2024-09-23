package com.DOH.DOH.dto.notifications;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO {
    private Long eventNum;
    private String eventTitle;
    private String eventContent;
    private LocalDate eventCreateTime;
    private String eventImageName;
    private String eventImageUrl;
    private int userNum;
    private boolean eventTempSave;
}
