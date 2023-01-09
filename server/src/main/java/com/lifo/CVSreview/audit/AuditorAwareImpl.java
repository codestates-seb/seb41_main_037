package com.codestates.audit;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * <h3>Spring Data JPA 실습 Solution 코드 포함</h3>
 * AuditorAwareImpl 클래스는 Spring Data JPA 실습 과제 중 첫 번째 과제의 Solution 코드를 포함하고 있습니다.
 * <p>&nbsp;</p>
 * <h4>AuditorAwareImpl 클래스에 대한 추가 설명</h4>
 * <ul>
 *     <li>
 *         {@link com.codestates.audit.AuditorAwareImpl} 클래스는
 *         <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedBy.html" target="_blank">
 *            {@literal @}CreatedBy
 *         </a> 애너테이션이 추가된 Entity 클래스의 필드에 Auditor(작성자를 의미)의 값을 채워주는 기능을 합니다.
 *     </li>
 *     <li>
 *         Auditor의 값을 채워주는 기능을 하기 위해서는
 *         <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/AuditorAware.html" target="_blank">
 *             AuditorAware
 *         </a> 인터페이스를 구현해야 합니다.
 *     </li>
 * </ul>
 * @author 황정식
 * @version 1.0.0
 * @see <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/AuditorAware.html" target="_blank">AuditorAware</a>
 */
@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    /**
     * <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedBy.html" target="_blank">
     *     {@literal @}CreatedBy
     * </a> 애너테이션이 추가된 Entity 클래스의 필드에 Auditor(작성자를 의미)의 값을 채우기 위한 Solution 코드입니다.
     * <p>
     *     <b>Solution 키 포인트</b>
     * </p>
     * <ul>
     *     <li>
     *         엔티티에 대한 Auditor를 무엇으로 설정할지 원하는 값을 지정하면 됩니다.
     *         현재는 리터럴 문자열을 이용해 Auditor를 고정했지만 요구사항에 따라 데이터베이스 등의 다른 영역에서
     *         값을 가져오는 로직을 구현할 수 있습니다.
     *     </li>
     * </ul>
     * @return Auditor로 채울 값.
     */
    @Override
    public Optional<String> getCurrentAuditor() {
        return Optional.of("Kevin");
    }
}
