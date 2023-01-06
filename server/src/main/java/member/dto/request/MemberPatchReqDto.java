package member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberPatchReqDto {
    @Positive
    private Long member_id;

    private String password;

    private String nickname;

    private String description;

}
