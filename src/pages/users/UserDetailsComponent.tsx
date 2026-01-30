import Card from '../../components/card/Card';
import { formatCurrency } from '../../lib/formatCurrency';
import type { User } from '../../types';
import styles from './user-details.module.scss';

const UserDetailsComponent = ({ user }: { user: User }) => {
  return (
    <Card padding="large" className={styles['details-card']}>
      <section className={styles.section}>
        <h3 className={styles['section-title']}>Personal Information</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <p className={styles['field-label']}>FULL NAME</p>
            <p className={styles['field-value']}>{user.full_name}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>PHONE NUMBER</p>
            <p className={styles['field-value']}>{user.phone_number}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>EMAIL ADDRESS</p>
            <p className={styles['field-value']}>{user.email}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>BVN</p>
            <p className={styles['field-value']}>{user.bvn}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>GENDER</p>
            <p className={styles['field-value']}>{user.gender}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>MARITAL STATUS</p>
            <p className={styles['field-value']}>{user.marital_status}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>CHILDREN</p>
            <p className={styles['field-value']}>
              {user.children === 0 ? 'none' : user.children}
            </p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>TYPE OF RESIDENCE</p>
            <p className={styles['field-value']}>{user.type_of_residence}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles['section-title']}>Education and Employment</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <p className={styles['field-label']}>LEVEL OF EDUCATION</p>
            <p className={styles['field-value']}>{user.education_level}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>EMPLOYMENT STATUS</p>
            <p className={styles['field-value']}>{user.employment_status}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>SECTOR OF EMPLOYMENT</p>
            <p className={styles['field-value']}>{user.employment_sector}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>DURATION OF EMPLOYMENT</p>
            <p className={styles['field-value']}>{user.employment_duration}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>OFFICE EMAIL</p>
            <p className={styles['field-value']}>{user.office_email}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}> MONTHLY INCOME</p>
            <p className={styles['field-value']}>
              {formatCurrency(user.monthly_income_min)}-
              {formatCurrency(user.monthly_income_max)}
            </p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>LOAN REPAYMENT</p>
            <p className={styles['field-value']}>
              {user.loan_repayment.toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles['section-title']}>Socials</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <p className={styles['field-label']}>Twitter</p>
            <p className={styles['field-value']}>{user.twitter}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>FACEBOOK</p>
            <p className={styles['field-value']}>{user.facebook}</p>
          </div>
          <div className={styles.field}>
            <p className={styles['field-label']}>INSTAGRAM</p>
            <p className={styles['field-value']}>{user.instagram}</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles['section-title']}>Guarantor</h3>
        {user.guarantor.map((gua, i) => (
          <div key={i} className={styles.grid}>
            <div className={styles.field}>
              <p className={styles['field-label']}>FULL NAME</p>
              <p className={styles['field-value']}>{gua.full_name}</p>
            </div>
            <div className={styles.field}>
              <p className={styles['field-label']}>PHONE NUMBER</p>
              <p className={styles['field-value']}>{gua.phone_number}</p>
            </div>
            <div className={styles.field}>
              <p className={styles['field-label']}>EMAIL ADDRESS</p>
              <p className={styles['field-value']}>{gua.email_address}</p>
            </div>
            <div className={styles.field}>
              <p className={styles['field-label']}>RELATIONSHIP</p>
              <p className={styles['field-value']}>{gua.relationship}</p>
            </div>
          </div>
        ))}
      </section>
    </Card>
  );
};

export default UserDetailsComponent;
