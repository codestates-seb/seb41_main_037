package com.codestates.audit;

import com.codestates.member.entity.Member;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * <h3>Spring Data JPA 실습 Solution 코드 포함</h3>
 * Auditable 클래스는 Spring Data JPA 실습 과제 중 첫 번째 과제의 Solution 코드를 포함하고 있습니다.
 * <p>&nbsp;</p>
 * <h4>Auditable 클래스에 대한 추가 설명</h4>
 * <ul>
 *     <li>
 *         {@link com.codestates.audit.Auditable} 클래스는 엔티티 클래스마다 공통으로 존재하는 엔티티 생성일, 수정일, 작성자 등의
 *         필드를 공통화 한 뒤, 엔티티에 대한 이벤트 발생 시 해당 필드의 값을 자동으로 채워주는 기능을 합니다.
 *     </li>
 *     <li>
 *         그리고 특정 Entity 클래스에서 Auditable 클래스를 상속(extends)하면
 *         Auditable 클래스에 정의된 필드를 Entity 클래스의 컬럼 매핑 대상으로 포함시킵니다.
 *     </li>
 *     <li>
 *         <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/MappedSuperclass.html" target="_blank">@MappedSuperclass</a>
 *         <ul>
 *             <li>
 *                  <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/MappedSuperclass.html" target="_blank">@MappedSuperclass</a>
 *                  애너테이션이 추가된 클래스는 이 클래스를 상속하는 Entity 클래스의 필드로 간주되어 컬럼 매핑의 대상이 됩니다.
 *             </li>
 *         </ul>
 *     </li>
 *     <li>
 *         <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/EntityListeners.html" target="_blank">@EntityListeners</a>
 *         <ul>
 *             <li>
 *                  <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/EntityListeners.html" target="_blank">@EntityListeners</a>
 *                  애너테이션을 이용해 Entity 클래스에 리스너를 추가할 수 있습니다.
 *                  여기서는
 *                  <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/domain/support/AuditingEntityListener.html" target="_blank">
 *                      AuditingEntityListener
 *                  </a>를 추가했으며,
 *                  <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/domain/support/AuditingEntityListener.html" target="_blank">
 *                      AuditingEntityListener
 *                  </a>는 영속성 컨텍스트에 저장된 엔티티의 변경 사항이 flush 되기 전에
 *                  엔티티의 생성일시({@link com.codestates.audit.Auditable#createdAt}),
 *                  수정일시({@link com.codestates.audit.Auditable#modifiedAt}),
 *                  작성자({@link com.codestates.audit.Auditable#createdBy}) 등의 필드에 값을 추가하는 역할을 합니다.
 *             </li>
 *         </ul>
 *     </li>
 * </ul>
 * @author 황정식
 * @version 1.0.0
 * @see <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/MappedSuperclass.html" target="_blank">@MappedSuperclass</a>
 * @see <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/EntityListeners.html" target="_blank">@EntityListeners</a>
 * @see <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/domain/support/AuditingEntityListener.html" target="_blank">AuditingEntityListener</a>
 */
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    /**
     * Audit 기능을 위한 Solution 코드입니다.
     * <p>
     *     <b>Solution 키 포인트</b>
     * </p>
     * <ul>
     *     <li>
     *         <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedDate.html" target="_blank">
     *             {@literal @}CreatedDate
     *         </a>
     *         <ul>
     *             <li>
     *                 Entity가 생성된 날짜를 나타내는 필드에 추가합니다.
     *             </li>
     *         </ul>
     *     </li>
     * </ul>
     * @see <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedDate.html" target="_blank">@CreatedDate</a>
     */
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    /**
     * Audit 기능을 위한 Solution 코드입니다.
     * <p>
     *     <b>Solution 키 포인트</b>
     * </p>
     * <ul>
     *     <li>
     *         <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/LastModifiedDate.html" target="_blank">
     *             {@literal @}LastModifiedDate
     *         </a>
     *         <ul>
     *             <li>
     *                 Entity가 마지막으로 수정된 날짜를 나타내는 필드에 추가합니다.
     *             </li>
     *         </ul>
     *     </li>
     * </ul>
     * @see <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/LastModifiedDate.html" target="_blank">@LastModifiedDate</a>
     */
    @LastModifiedDate
    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt;

    /**
     * Audit 기능을 위한 Solution 코드입니다.
     * <p>
     *     <b>Solution 키 포인트</b>
     * </p>
     * <ul>
     *     <li>
     *         <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedBy.html" target="_blank">
     *             {@literal @}CreatedBy
     *         </a>
     *         <ul>
     *             <li>
     *                 Entity를 생성한 주체를 나타내는 필드에 추가합니다.
     *             </li>
     *             <li>
     *                 <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedBy.html" target="_blank">
     *                      {@literal @}CreatedBy
     *                 </a>의 경우,
     *                 <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/AuditorAware.html" target="_blank">
     *                      AuditorAware
     *                 </a> 인터페이스를 구현해야 정상 동작합니다.
     *             </li>
     *         </ul>
     *     </li>
     * </ul>
     *
     * @see <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/annotation/CreatedBy.html" target="_blank">@CreatedBy</a>
     * @see <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/AuditorAware.html" target="_blank">AuditorAware</a>
     * @see com.codestates.audit.AuditorAwareImpl
     */
    @CreatedBy
    @Column(updatable = false)
    private String createdBy;
}
