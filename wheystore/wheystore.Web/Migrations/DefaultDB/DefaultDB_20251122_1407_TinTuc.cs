using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1407)]
public class DefaultDB_20251122_1407_TinTuc : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("TinTuc")
             .WithColumn("TinTucId").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("DanhMucId").AsInt32().NotNullable()
             .WithColumn("TieuDe").AsString(200).NotNullable()
             .WithColumn("Slug").AsString(250).NotNullable()
             .WithColumn("TomTat").AsString(500).Nullable()
             .WithColumn("AnhBia").AsString(255).Nullable()
             .WithColumn("NoiDungHtml").AsString(int.MaxValue).Nullable()
             .WithColumn("SeoTitle").AsString(200).Nullable()
             .WithColumn("SeoDescription").AsString(300).Nullable()
             .WithColumn("IsPublished").AsBoolean().NotNullable().WithDefaultValue(false)
             .WithColumn("IsHot").AsBoolean().NotNullable().WithDefaultValue(false)
             .WithColumn("ViewCount").AsInt32().NotNullable().WithDefaultValue(0)
             .WithColumn("NgayDang").AsDateTime2().NotNullable().WithDefault(SystemMethods.CurrentDateTime)
             .WithColumn("NgayCapNhat").AsDateTime2().Nullable()
             .WithColumn("TacGia").AsString(100).Nullable();

        Create.Index("IX_TinTuc_Slug")
            .OnTable("TinTuc")
            .OnColumn("Slug").Unique();

    
    }
}